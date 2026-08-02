import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

import * as bcrypt from "bcrypt";


const corsHeaders = {

  "Access-Control-Allow-Origin": "*",

  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",

};



Deno.serve(async (req)=>{


  if(req.method === "OPTIONS"){

    return new Response(
      "ok",
      {
        headers:corsHeaders
      }
    );

  }



  try {


    const {
      pin
    } = await req.json();



    if(!pin){

      return new Response(

        JSON.stringify({
          authenticated:false,
          message:"PIN obrigatório"
        }),

        {
          status:400,
          headers:{
            ...corsHeaders,
            "Content-Type":"application/json"
          }
        }

      );

    }



    const supabase = createClient(

      Deno.env.get(
        "SUPABASE_URL"
      ) ?? "",


      Deno.env.get(
        "SUPABASE_SERVICE_ROLE_KEY"
      ) ?? ""

    );



    const {
      data,
      error
    } = await supabase

      .from("admin_access")

      .select("pin_hash")

      .limit(1)

      .single();



    if(error || !data){


      return new Response(

        JSON.stringify({
          authenticated:false
        }),

        {
          status:401,
          headers:{
            ...corsHeaders,
            "Content-Type":"application/json"
          }
        }

      );

    }



    const valid = await bcrypt.compare(

      pin,

      data.pin_hash

    );



    return new Response(

      JSON.stringify({

        authenticated:valid

      }),

      {

        status:200,

        headers:{
          ...corsHeaders,
          "Content-Type":"application/json"
        }

      }

    );



  } catch(error){


    return new Response(

      JSON.stringify({

        authenticated:false,

        error:String(error)

      }),

      {

        status:500,

        headers:{
          ...corsHeaders,
          "Content-Type":"application/json"
        }

      }

    );

  }


});