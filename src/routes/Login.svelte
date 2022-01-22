<script>
  import { user } from "../stores/dataStore";
  import supabase from "$lib/db";
  import Auth from "./Auth.svelte";
  import Profile from "./Profile.svelte";

  user.set(supabase.auth.user());

  supabase.auth.onAuthStateChange((_, session) => {
    user.set(session.user);
  });
</script>

<svelte:head>
  <link href="/supabase.css" rel="stylesheet" />
</svelte:head>

<div class="container" style="padding: 50px 0 100px 0;">
  {#if $user}
    <Profile />
  {:else}
    <Auth />
  {/if}
</div>
