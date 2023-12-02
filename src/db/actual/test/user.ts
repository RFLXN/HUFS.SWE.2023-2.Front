import { UserAdapter as AUserAdapter } from "@/db/adapter/user";
import { User } from "@/db/entity/user";
import { UserData } from "@/db/actual/test/dataset";

class UserAdapter extends AUserAdapter {
    async getUser(id: string): Promise<User> {
        return UserData[0];
    }
}

export { UserAdapter };
