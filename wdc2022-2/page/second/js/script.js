new Vue({
    el: '#app',
    data() {
        return {
            bg: 'bio',
            text: ['红心向党', '建功新时代', '经典歌曲'],
            show: '红心向党',
            flag1: true,
            timer: null
        };
    },
    mounted() {
        const h = this.$createElement;
        this.$notify({
            title: '',
            message: h('i', {style: 'color: #cc3232'}, '欢迎访问'),
            duration: 3000
        });
        window.addEventListener('scroll', () => {
            var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            // console.log(scrollTop)
            window.onscroll = e => {
                this.debounce(this.showTop, 1000)
            }
        })
    },
    methods: {
        ngOnInit() {

        },
        showTop() {
            const h = this.$createElement;

            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            var clients=window.innerHeight || document.documentElement.clientHeight||document.body.clientHeight;
            var wholeHeight=document.body.scrollHeight;
            if (scrollTop >= 750 && scrollTop <= 949) {
                this.$notify({
                    title: '',
                    message: h('i', {style: 'color: #cc3232'}, '点击历届大会概览了解详情'),
                    duration: 2000,
                    offset: 100
                });
            } else if (scrollTop >= 1449 && scrollTop <= 1599) {
                this.$notify({
                    title: '',
                    message: h('i', {style: 'color: #cc3232'}, '点击红色文字了解详情'),
                    duration: 2000,
                    offset: 100
                });
            } else if (scrollTop >= 2749 && scrollTop <= 2949) {
                this.$notify({
                    title: '',
                    message: h('i', {style: 'color: #cc3232'}, '我的生命热衷于党,我的信仰光芒万丈'),
                    duration: 2000,
                    offset: 100
                });
            } else if (scrollTop >= 4949 && scrollTop <= 5130) {
                this.$notify({
                    title: '',
                    message: h('i', {style: 'color: #cc3232'}, '风声雨声读书声，声声入耳；家事国事天下事，事事关心。'),
                    duration: 2000,
                    offset: 100
                });
            }else if (scrollTop >= 5700 && scrollTop <= 5847) {
                this.$notify({
                    title: '',
                    message: h('i', {style: 'color: #cc3232'}, '风声雨声读书声，声声入耳；家事国事天下事，事事关心。'),
                    duration: 2000,
                    offset: 100
                });
            }else if (clients + scrollTop >= wholeHeight) {
                this.$notify({
                    title: '',
                    message: h('i', {style: 'color: #cc3232'}, '我是有底线的'),
                    duration: 2000,
                    offset: 100
                });
            }
        },
        debounce(fn, delay) {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(fn, delay)
        },
        change(e) {
            if (e == 'a') {
                this.bg = 'bio';
                this.show = this.text[0]
            } else if (e == 'b') {
                this.bg = 'projects'
                this.show = this.text[1]

            } else {
                this.bg = 'find-me'
                this.show = this.text[2]
            }
        }
    }
});
