<script setup>
    import FooterComponent from '../../components/UserComponent/FooterComponent.vue'
</script>
<template>
    <section class="bg-white dark:bg-gray-900">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
              <div class="text-[#ffbe1c] text-[20px]"><strong>Our Exclusive</strong></div>
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Adidas Campus</h1>
              <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
              <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-black hover:bg-slate-900 focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-900">
                  Get started
                  <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
          </div>
          <div class="hidden relative lg:mt-0 lg:col-span-5 lg:flex">
              <div class="absolute top-6 left-36 -rotate-[30deg]">IT'S TIME TO GO</div>
              <div class="absolute top-32 -rotate-[30deg] text-7xl text-[#ffbe1c] italic"><strong>RUN</strong></div>
              <img src="../../assets/image/sh1_Copy.png" alt="mockup">
          </div>                
      </div>

    <!-- Discount session -->
    <div class="w-full max-sm:px-2 px-10 mb-8">
        <RouterLink to="/login">
        <div class="w-full bg-[#ffbe1c] rounded-3xl p-8 flex justify-center text-white">Click here for 10% off</div>
        </RouterLink>
    </div>

    <!-- Footer -->
    <FooterComponent/>
  </section>
</template>