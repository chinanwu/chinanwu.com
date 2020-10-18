import { shallowMount } from "@vue/test-utils";
import FloatTextArea from "@/components/FloatTextArea.vue";

describe("FloatTextArea", () => {
  describe("rendering", () => {
    it("renders", () => {
      const wrapper = shallowMount(FloatTextArea, {
        props: {
          label: "test"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
    });
  });

  describe("behaviour", () => {
    it("floats if focused in on", () => {
      const wrapper = shallowMount(FloatTextArea, {
        props: {
          label: "label"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.float).toBeFalsy();
      wrapper.find("#floatTextArea-label").trigger("focusin");
      expect(wrapper.vm.float).toBeTruthy();
    });

    it("stops floating if focus moves away with no input", () => {
      const wrapper = shallowMount(FloatTextArea, {
        props: {
          label: "label"
        },
        data() {
          return {
            float: true
          };
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      wrapper.find("#floatTextArea-label").trigger("focusout");
      expect(wrapper.vm.float).toBeFalsy();
    });

    it("keep floating if focus moves away with input", () => {
      const wrapper = shallowMount(FloatTextArea, {
        props: {
          label: "label"
        },
        data() {
          return {
            float: true,
            inputValue: "something"
          };
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      wrapper.find("#floatTextArea-label").trigger("focusout");
      expect(wrapper.vm.float).toBeTruthy();
      expect(wrapper.emitted().change).toEqual([["something"]]);
    });
  });
});
