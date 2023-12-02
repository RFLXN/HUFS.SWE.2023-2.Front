import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

function isDarkMode(store: ReadonlyRequestCookies) {
    const cookies = store.getAll();

    const target = cookies.filter(cookie => cookie.name == "dark")[0];
    return target && target.value == "true";
}

export { isDarkMode };
