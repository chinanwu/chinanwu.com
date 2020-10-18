import Card from "@/components/Card";
import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App", () => {
  describe("rendering", () => {
    it("renders", () => {
      const wrapper = shallowMount(App);
      expect(wrapper.element).toMatchSnapshot();
    });

    it("renders main screen", () => {
      sessionStorage.setItem("readMore", "true");
      const wrapper = shallowMount(App);
      expect(wrapper.element).toMatchSnapshot();
      sessionStorage.setItem("readMore", "false");
    });
  });

  describe("behaviour", () => {
    it("removes flip prompt on card click", () => {
      const wrapper = shallowMount(App);
      expect(wrapper.element).toMatchSnapshot();
      wrapper.findComponent(Card).vm.$emit("click");
      expect(wrapper.vm.showFlip).toBeFalsy();
    });

    it("switches to Main when click read more", () => {
      const wrapper = shallowMount(App);
      expect(wrapper.element).toMatchSnapshot();
      wrapper.find("#readMore").trigger("click");
      expect(wrapper.vm.readMore).toBeTruthy();
    });
  });
});
