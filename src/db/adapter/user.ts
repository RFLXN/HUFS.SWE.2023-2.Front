import { User } from "@/db/entity/user";

abstract class UserAdapter {
    public abstract getUser(id: string): User | Promise<User>;
}

export { UserAdapter };
