import { NextRequest, NextResponse } from "next/server";
import { search } from "@/function/search";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest, response: NextResponse) {
    const searchString = request.nextUrl.searchParams.get("s");

    if (!searchString || searchString == "") {
        return Response.json({ teams: [], leagues: [] });
    }

    const data = await search(searchString);

    return Response.json(data);
}
