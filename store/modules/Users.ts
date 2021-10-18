import {
  Module,
  Mutation,
  MutationAction,
  Action,
  VuexModule
} from "vuex-module-decorators";

@Module({ namespaced: true, stateFactory: true, name: "Greetings" })
export default class UserModule extends VuexModule {
  user = {
    fullName: "Raymond Kalumba",
    roles: { HumanLivingBoilerplate: true },
    active: true,
    uid: 123456
  };

  get users() {
    return { ...this.user, ...this.user, ...this.user, ...this.user };
  }
}
