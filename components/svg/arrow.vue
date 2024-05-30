<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_126_82)">
      <path
        d="M0.666687 0.666672H7.33335V7.33334"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M0.666687 7.33334L7.33335 0.666672"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_126_82">
        <rect :width="width" :height="height" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>

<script setup>
const props = defineProps({
  width: Number,
  height: Number,
  color: String,
});
</script>
