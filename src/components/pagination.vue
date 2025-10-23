<script setup lang="ts">
// This component shows the "Previous" and "Next" buttons.

// Tell this component what data it needs from its parent (HomePage.vue)
const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>();

// Tell the parent what events it can send (like clicking Previous or Next)
const emit = defineEmits<{
  (e: 'update:page', page: number): void;
}>();

// Function to go to the previous page
const goToPrev = () => {
  if (props.currentPage > 1) {
    emit('update:page', props.currentPage - 1);
  }
};

// Function to go to the next page
const goToNext = () => {
  if (props.currentPage < props.totalPages) {
    emit('update:page', props.currentPage + 1);
  }
};
</script>

<template>
  <div class="flex justify-center space-x-4 mt-8 mb-10">
    <button
      @click="goToPrev"
      :disabled="currentPage === 1"
      :class="['btn', 'btn-primary', { 'opacity-50 cursor-not-allowed': currentPage === 1 }]"
    >
      Previous
    </button>

    <button
      @click="goToNext"
      :disabled="currentPage === totalPages"
      :class="['btn', 'btn-primary', { 'opacity-50 cursor-not-allowed': currentPage === totalPages }]"
    >
      Next
    </button>
  </div>
</template>