<template>
    <main id="app">
        <section class="flex-row flex justify-center align-middle">
            <div class="source relative flex align-middle flex-col">
                <div class="md:absolute top-0 -z-20 text-center w-full px-4 md:p-0">
                    <p class="font-display font-bold text-accent md:leading-[9rem] leading-[6rem] text-[80px] md:text-[150px]">Error
                        404</p>
                    <p class="md:text-4xl md:p-0 px-6 text-2xl leading-6 md:leading-normal">Oh, no! The page you were looking for is not found.</p>
                    <p class="md:text-2xl md:p-0 text-lg block">Sorry you got lost, but oh!, you found a whiteboard.</p>
                </div>
                
                <!-- Canvas -->
                <vue-drawing-canvas
                    ref="VueCanvasDrawing"
                    class="canvas m-2 cursor-[url(https://cur.cursors-4u.net/others/oth-7/oth697.cur),_pointer]"
                    :width="canvasWidth"
                    :height="canvasHeight"
                    :stroke-type="strokeType"
                    :line-cap="lineCap"
                    :line-join="lineJoin"
                    :lineWidth="line"
                    :color="color"
                    :background-color="backgroundColor"
                    :initial-image="initialImage"
                    saveAs="png"
                    :styles="{ border: 'solid 1px #000', transform: 'scale(1)' }"
                    @mousemove="getCoordinate($event)"
                    @mouseup="getStrokes"
                />

                <div class="button-container flex justify-center md:block">
                    <button type="button" @click.prevent="removeSavedStrokes()"
                        class="hover:cursor-pointer mt-3 py-1 hover:text-background hover:bg-accent stroke-accent hover:play uppercase text-sm self-center md:self-start border rounded-[50px] px-3 transition duration-300 ease-out bg-background text-accent hover:italic hover:font-bold">
                        Reset Canvas
                    </button>
                </div>
            </div>
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
            initialImage: [],
            line: 2, // Tamaño del trazo
            color: "#0000ff",
            strokeType: "dash",
            lineCap: "square",
            lineJoin: "round",
            backgroundColor: "transparent",
            canvasWidth: 740,  // Valor numérico
            canvasHeight: 650, // Valor numérico
        };
    },
    mounted() {
        this.adjustCanvasSize(); // Ajusta el tamaño al cargar
        window.addEventListener("resize", this.adjustCanvasSize); // Recalcula en cambio de tamaño
    },
    methods: {
        adjustCanvasSize() {
            if (window.innerWidth < 768) {
                // Ajustamos el tamaño para dispositivos móviles
                this.canvasWidth = Math.floor(window.innerWidth * 0.9); // Ajustamos a un 90% del ancho
                this.canvasHeight = Math.floor(window.innerHeight * 0.5); // Ajustamos a un 50% de la altura
              
            } else {
                // Tamaño fijo para pantallas grandes
                this.canvasWidth = 740;
                this.canvasHeight = 650;
              
            }
        },
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
    beforeDestroy() {
        window.removeEventListener("resize", this.adjustCanvasSize);
    },
};
</script>

<style scoped>
/* Centramos el lienzo */
.canvas {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
}


</style>
