<template>

    <main id="app">
        <section class="flex-row flex justify-center align-middle">
            <div class="source relative">
                <div class="md:absolute top-0 -z-20 text-center w-full">
                    <p class=" font-display font-bold text-accent md:leading-[9rem] text-[80px] md:text-[150px]">Error
                        404</p>
                    <p class="md:text-4xl text-3xl">Oh, no! The page you were looking for is not found.</p>
                    <p class="text-2xl hidden md:block ">Sorry you got lost, but oh!, you found a whiteboard.</p>
                </div>
                <vue-drawing-canvas ref="VueCanvasDrawing" class="hidden md:block cursor-[url(https://cur.cursors-4u.net/others/oth-7/oth697.cur),_pointer]" :width="740" :height="650" :stroke-type="strokeType"
                    :line-cap="lineCap" :line-join="lineJoin" :lineWidth="line" :color="color"
                    :background-color="backgroundColor" :initial-image="initialImage" saveAs="png" :styles="{
                        border: 'solid 1px #000',
                    }" @mousemove="getCoordinate($event)" @mouseup="getStrokes" />

                <div class="button-container hidden md:block">
                    <button type="button" @click.prevent="removeSavedStrokes()"
                        class="hover:cursor-pointer mt-3 py-1 hover:text-background hover:bg-accent stroke-accent hover:play uppercase text-sm self-center md:self-start border rounded-[50px] px-3 transition duration-300 ease-out bg-background text-accent hover:italic hover:font-bold">

                        Reset Canvas
                    </button>

                </div>
            </div>
            <!-- TODO cursor de llapis -->
        </section>
    </main>


</template>
<script>
import VueDrawingCanvas from "vue-drawing-canvas";



export default {
    name: "ServeDev",
    components: {
        VueDrawingCanvas,
    },
    data() {
        return {
            initialImage: [
                {
                    type: "dash",
                    from: {
                        x: 262,
                        y: 154,
                    },
                    coordinates: [],
                    color: "#000000",
                    width: 5,
                    fill: false,
                },
            ],
            x: 0,
            y: 0,
            line: 2,
            color: "#0000ff",
            strokeType: "dash",
            lineCap: "square",
            lineJoin: "round",
            backgroundColor: "transparent",
        };
    },
    mounted() {
        if ("vue-drawing-canvas" in window.localStorage) {
            this.initialImage = JSON.parse(
                window.localStorage.getItem("vue-drawing-canvas")
            );
        }
    },
    methods: {
        getCoordinate(event) {
            let coordinates = this.$refs.VueCanvasDrawing.getCoordinates(event);
            this.x = coordinates.x;
            this.y = coordinates.y;
        },

        getStrokes() {
            window.localStorage.setItem(
                "vue-drawing-canvas",
                JSON.stringify(this.$refs.VueCanvasDrawing.getAllStrokes())
            );

        },
        removeSavedStrokes() {
            window.localStorage.removeItem("vue-drawing-canvas");
            window.location.reload();
        },
    },
};
</script>



<style scoped>

</style>