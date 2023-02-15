import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

export default async function handler(req, res) {
  const supabase = createServerSupabaseClient({ req, res });
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();
  // console.log({session:session})
  if (req.method === "POST") {
    const jsonData = JSON.parse(req.body);
    // console.log(jsonData.list.title)
    // console.log(jsonData.list.points)
    const { error } = await supabase.from("lists").insert({
      title: jsonData.list.title,
      points: jsonData.list.points,
      user_id: session.user.id,
    });

    if (!error) res.status(200).json({ response: "Success" });
    if (error) res.status(500).json({ response: error });
  } else if (req.method === "GET") {
    console.log(`/lists ${req.method}`);

    const query = req.query;
    const { userId,limit } = query;
    console.log("🚀 ~ file: lists.js:27 ~ handler ~ userId", userId)
    console.log("🚀 ~ file: lists.js:28 ~ handler ~ limit", limit)

    let finalData = {}
    if (userId !== undefined&& userId!=="") {
      const { data, error } = await supabase
        .from("lists")
        .select('id,title')
        .eq("user_id", userId)
        .order("created_at", { ascending: false })
        .limit(limit);
        
        if (!error) res.status(200).json(data);
    } else {
      const { data, error } = await supabase
        .from("lists")
        .select('id,title')
        .order("created_at", { ascending: false })
        .limit(limit);

        if (!error) res.status(200).json(data);
      }

  } 

}
