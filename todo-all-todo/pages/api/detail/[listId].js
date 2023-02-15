import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

export default async function handler(req, res) {
  const { listId } = req.query;

  if (req.method === "GET") {
    console.log(`GET /detail/${listId} ${req.method}`);
    console.log(`API List by ID`);
    const supabase = createServerSupabaseClient({ req, res });

    const { data, error } = await supabase
      .from("lists")
      .select()
      .eq("id", listId);

    if (!error) res.status(200).json(data);
    if (error) res.status(500).json(error);
  } else {
    res.status(501).json({ error: "Not implemented" });
  }
}
