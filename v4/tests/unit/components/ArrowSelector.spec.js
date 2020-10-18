import { shallowMount } from "@vue/test-utils";

import ArrowSelector from "@/components/ArrowSelector.vue";

describe("ArrowSelector", () => {
  describe("rendering", () => {
    it("renders ArrowSelector", () => {
      const wrapper = shallowMount(ArrowSelector, {
        props: {
          items: ["One", "Two"],
          active: "One"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.current).toBe(1);
      expect(wrapper.vm.total).toBe(2);
    });
  });

  describe("behaviour", () => {
    it("selects next if click right arrow", () => {
      const wrapper = shallowMount(ArrowSelector, {
        props: {
          items: ["One", "Two"],
          active: "One"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.current).toBe(1);
      expect(wrapper.vm.total).toBe(2);

      wrapper.find("#arrowSelectorRight").trigger("click");
      expect(wrapper.emitted()).toHaveProperty("change");
      expect(wrapper.emitted().change).toEqual([[2]]);
    });

    it("selects prev if click left arrow", () => {
      const wrapper = shallowMount(ArrowSelector, {
        props: {
          items: ["One", "Two"],
          active: "Two"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.current).toBe(2);

      wrapper.find("#arrowSelectorLeft").trigger("click");
      expect(wrapper.emitted()).toHaveProperty("change");
      expect(wrapper.emitted().change).toEqual([[1]]);
    });
  });

  describe("prop validation", () => {
    it("throws error if not valid items", () => {
      const validator = ArrowSelector.props.items.validator;
      expect(validator(["test"])).toBe(true);
      expect(validator([1])).toBe(false);
    });
  });
});
