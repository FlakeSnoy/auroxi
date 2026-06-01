<script lang="ts">
  import redSemi    from '$lib/assets/(background)/index-portal-red-semi.svg';
  import red        from '$lib/assets/(background)/index-portal-red.svg';
  import orangeSemi from '$lib/assets/(background)/index-portal-orange-semi.svg';
  import orange     from '$lib/assets/(background)/index-portal-orange.svg';
  import yellowSemi from '$lib/assets/(background)/index-portal-yellow-semi.svg';
  import yellow     from '$lib/assets/(background)/index-portal-yellow.svg';
  import greenSemi  from '$lib/assets/(background)/index-portal-green-semi.svg';
  import green      from '$lib/assets/(background)/index-portal-green.svg';
  import blueSemi   from '$lib/assets/(background)/index-portal-blue-semi.svg';
  import blue       from '$lib/assets/(background)/index-portal-blue.svg';

  const { position = 'right', opacity = 0.18 }: {
    position?: 'left' | 'right' | 'center';
    opacity?: number;
  } = $props();

  type Ring = { src: string; size: number; duration: number; reverse: boolean };

  const rings: Ring[] = [
    { src: redSemi    as string, size: 520, duration: 8,  reverse: false },
    { src: red        as string, size: 480, duration: 10, reverse: true  },
    { src: orangeSemi as string, size: 442, duration: 12, reverse: false },
    { src: orange     as string, size: 406, duration: 14, reverse: true  },
    { src: yellowSemi as string, size: 372, duration: 16, reverse: false },
    { src: yellow     as string, size: 340, duration: 18, reverse: true  },
    { src: greenSemi  as string, size: 310, duration: 20, reverse: false },
    { src: green      as string, size: 282, duration: 22, reverse: true  },
    { src: blueSemi   as string, size: 256, duration: 24, reverse: false },
    { src: blue       as string, size: 232, duration: 26, reverse: true  },
  ];

  // Fix: use $derived so position is reactive, not captured as initial value
  const posClass = $derived(
    position === 'left'   ? '-left-32 top-1/2 -translate-y-1/2' :
    position === 'center' ? 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' :
                            '-right-32 top-1/2 -translate-y-1/2'
  );
</script>

<style>
  @keyframes spin-cw  { to { transform: rotate(360deg);  } }
  @keyframes spin-ccw { to { transform: rotate(-360deg); } }
  .ring {
    position: absolute;
    top: 50%; left: 50%;
    translate: -50% -50%;
    transform-origin: center center;
    pointer-events: none;
    user-select: none;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    background: none !important;
    display: block;
  }
  .cw  { animation: spin-cw  linear infinite; }
  .ccw { animation: spin-ccw linear infinite; }
</style>

<!-- Dot grid -->
<div class="absolute inset-0 pointer-events-none z-0"
  style="background-image: radial-gradient(circle, #3f3f46 1px, transparent 1px);
         background-size: 28px 28px; opacity: 0.25;">
</div>

<!-- Orbital rings -->
<div class="absolute pointer-events-none z-0 {posClass}"
  style="width: 520px; height: 520px; opacity: {opacity};">
  {#each rings as ring}
    <img src={ring.src} alt="" aria-hidden="true"
      class="ring {ring.reverse ? 'ccw' : 'cw'}"
      style="width:{ring.size}px;height:{ring.size}px;animation-duration:{ring.duration}s;" />
  {/each}
</div>