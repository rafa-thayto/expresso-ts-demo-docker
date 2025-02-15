import { provide } from "inversify-binding-decorators";
import { IBaseRepository } from "./base-repository.interface";
import { IEntity } from "@entities/base.entity";

@provide(BaseRepository)
class BaseRepository<T extends IEntity> implements IBaseRepository<T> {
    private readonly USERDB: T[] = [];

    create(item: T): T | null {
        this.USERDB.push(item);
        return item;
    }

    update(item: T) {
        this.USERDB.push(item);
        return item;
    }

    delete(id: string): boolean {
        const index: number = this.USERDB.findIndex((item) => item.Id === id);

        if (index != -1) {
            this.USERDB.splice(index, 1);
            return true;
        }
        return false;
    }

    find(id: string): T | null {
        const user = this.USERDB.find((item) => item.Id === id);
        return user || null;
    }

    findAll(): T[] {
        return this.USERDB;
    }
}

export { BaseRepository };
