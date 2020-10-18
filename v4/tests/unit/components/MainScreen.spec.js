import { shallowMount } from "@vue/test-utils";
import MainScreen from "@/components/MainScreen.vue";

describe("MainScreen", () => {
  it("renders", () => {
    const wrapper = shallowMount(MainScreen);
    expect(wrapper.element).toMatchSnapshot();
  });
});
