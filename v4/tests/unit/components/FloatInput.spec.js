import { shallowMount } from "@vue/test-utils";
import FloatInput from "@/components/FloatInput.vue";

describe("FloatInput", () => {
  describe("rendering", () => {
    it("renders", () => {
      const wrapper = shallowMount(FloatInput, {
        props: {
          label: "label",
          name: "Test"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
    });

    it("renders required field", () => {
      const wrapper = shallowMount(FloatInput, {
        props: {
          label: "label",
          name: "Test",
          required: true
        }
      });
      expect(wrapper.element).toMatchSnapshot();
    });
  });

  describe("behaviour", () => {
    it("floats if focused in on", () => {
      const wrapper = shallowMount(FloatInput, {
        props: {
          label: "label",
          name: "Test"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.float).toBeFalsy();
      wrapper.find("#floatInput-label").trigger("focusin");
      expect(wrapper.vm.float).toBeTruthy();
    });

    it("stops floating if focus moves away with no input", () => {
      const wrapper = shallowMount(FloatInput, {
        props: {
          label: "label",
          name: "Test"
        },
        data() {
          return {
            float: true
          };
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      wrapper.find("#floatInput-label").trigger("focusout");
      expect(wrapper.vm.float).toBeFalsy();
    });

    it("keep floating if focus moves away with input", () => {
      const wrapper = shallowMount(FloatInput, {
        props: {
          label: "label",
          name: "Test"
        },
        data() {
          return {
            float: true,
            inputValue: "something"
          };
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      wrapper.find("#floatInput-label").trigger("focusout");
      expect(wrapper.vm.float).toBeTruthy();
      expect(wrapper.emitted().change).toEqual([["something"]]);
    });
  });
});
