<template>
    <div>
        <svg ref="barcode"></svg>
    </div>
</template>

<script>
    import jsbarcode from "jsbarcode"

    export default {
        name: "LBarCode",
        props: {
            value: ""
        },
        data() {
            return {}
        },
        mounted() {
            this.make();
        },
        methods: {
            make() {
                if (this.value) {
                    jsbarcode(this.$refs.barcode, this.value, {
                        width: 1.5
                    });
                }
            },
        },
        watch: {
            value() {
                this.make();
            },
        },
    }
</script>