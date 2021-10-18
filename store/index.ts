import { Module, VuexModule, Action } from "vuex-module-decorators";

@Module
export default class extends VuexModule {
  @Action
  async initNuxtServerInit(context) {
    // Defining a store by object and class is very different,
    if (!context.route || !context.route.name) {
      try {
        // so you do someing  when fist open or page refresh
        return true;
      } catch (error) {}
    }
  }
}
