import { Module, VuexModule } from "vuex-module-decorators";

@Module({ namespaced: true, stateFactory: true, name: "Greetings" })
export default class userModule extends VuexModule {
  user = {
    fullName: "Raymond Kalumba",
    role: { HumanLivingBoilerPlate: true },
    active: true,
    uid: 12345
  };

  getUser() {
    return { ...this.user, ...this.user, ...this.user, ...this.user };
  }
}
