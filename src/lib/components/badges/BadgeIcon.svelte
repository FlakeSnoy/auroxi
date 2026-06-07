<script lang="ts">
  const { icon, color, name }: { icon: string; color: string; name: string } = $props();
</script>

<div style="background:{color}20;border-color:{color}40"
  class="w-10 h-10 rounded-xl border flex items-center justify-center text-lg shrink-0"
  title={name}>
  {icon}
</div>