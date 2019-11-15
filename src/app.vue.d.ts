import Vue from 'vue';
export default class App extends Vue {
    bundler: string;
    token: string;
    data(): {
        bundler: string;
        token: any;
        version: string;
    };
}
