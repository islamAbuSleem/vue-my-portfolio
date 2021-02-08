<template>
    <div class="rating">
            <v-icon v-for="star in +rate" :key="star" size="25" color="amber darken-1">mdi-star</v-icon>
    </div>
</template>

<script>
export default {
    props:["rate"],
}
</script>