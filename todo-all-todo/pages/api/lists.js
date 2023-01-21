import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'

export default async function handler(req, res) {
  const supabase = createServerSupabaseClient({ req, res })
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession()
    console.log({session:session})
    if (req.method === 'POST') {
        

        const jsonData = JSON.parse(req.body)
        console.log(jsonData.list.title)
        console.log(jsonData.list.points)
        const { error } = await supabase
        .from('lists')
        .insert({  title: jsonData.list.title, points: jsonData.list.points, user_id: session.user.id })
        if(!error) res.status(200).json({ response: "Success" })
        if(error) res.status(500).json({ response: error })

    } else {
        res.status(500).json({ response: "Should use a POST request"})
      }



    //const reqText = req.body.text

  }