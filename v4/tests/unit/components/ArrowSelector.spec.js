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

    it("selects next if enter press right arrow", () => {
      const preventDefault = jest.fn();
      const wrapper = shallowMount(ArrowSelector, {
        props: {
          items: ["One", "Two"],
          active: "Two"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.current).toBe(2);

      wrapper.find("#arrowSelectorRight").trigger("keydown", {
        key: "Enter",
        preventDefault
      });
      expect(wrapper.emitted()).toHaveProperty("change");
      expect(wrapper.emitted().change).toEqual([[1]]);
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    it("selects next if space press right arrow", () => {
      const preventDefault = jest.fn();
      const wrapper = shallowMount(ArrowSelector, {
        props: {
          items: ["One", "Two"],
          active: "Two"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.current).toBe(2);

      wrapper.find("#arrowSelectorRight").trigger("keydown", {
        key: "Space",
        preventDefault
      });
      expect(wrapper.emitted()).toHaveProperty("change");
      expect(wrapper.emitted().change).toEqual([[1]]);
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    it("does nothing on invalid keydown on right arrow", () => {
      const preventDefault = jest.fn();
      const wrapper = shallowMount(ArrowSelector, {
        props: {
          items: ["One", "Two"],
          active: "Two"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.current).toBe(2);

      wrapper.find("#arrowSelectorRight").trigger("keydown", {
        key: "A",
        preventDefault
      });
      expect(wrapper.vm.current).toBe(2);
      expect(preventDefault).toHaveBeenCalledTimes(0);

      wrapper.find("#arrowSelectorRight").trigger("keydown");
      expect(wrapper.vm.current).toBe(2);

      wrapper.find("#arrowSelectorRight").trigger("keydown", {
        key: "Enter",
        shiftKey: true,
        preventDefault
      });
      expect(wrapper.vm.current).toBe(2);
      expect(preventDefault).toHaveBeenCalledTimes(0);

      wrapper.find("#arrowSelectorRight").trigger("keydown", {
        key: "Enter",
        ctrlKey: true,
        preventDefault
      });
      expect(wrapper.vm.current).toBe(2);
      expect(preventDefault).toHaveBeenCalledTimes(0);

      wrapper.find("#arrowSelectorRight").trigger("keydown", {
        key: "Enter",
        altKey: true,
        preventDefault
      });
      expect(wrapper.vm.current).toBe(2);
      expect(preventDefault).toHaveBeenCalledTimes(0);

      wrapper.find("#arrowSelectorRight").trigger("keydown", {
        key: "Enter",
        metaKey: true,
        preventDefault
      });
      expect(wrapper.vm.current).toBe(2);
      expect(preventDefault).toHaveBeenCalledTimes(0);
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

    it("selects prev if enter press left arrow", () => {
      const preventDefault = jest.fn();
      const wrapper = shallowMount(ArrowSelector, {
        props: {
          items: ["One", "Two"],
          active: "One"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.current).toBe(1);

      wrapper.find("#arrowSelectorLeft").trigger("keydown", {
        key: "Enter",
        preventDefault
      });
      expect(wrapper.emitted()).toHaveProperty("change");
      expect(wrapper.emitted().change).toEqual([[2]]);
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    it("selects prev if space press left arrow", () => {
      const preventDefault = jest.fn();
      const wrapper = shallowMount(ArrowSelector, {
        props: {
          items: ["One", "Two"],
          active: "One"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.current).toBe(1);

      wrapper.find("#arrowSelectorLeft").trigger("keydown", {
        key: "Space",
        preventDefault
      });
      expect(wrapper.emitted()).toHaveProperty("change");
      expect(wrapper.emitted().change).toEqual([[2]]);
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    it("does nothing on invalid keydown on left arrow", () => {
      const preventDefault = jest.fn();
      const wrapper = shallowMount(ArrowSelector, {
        props: {
          items: ["One", "Two"],
          active: "Two"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.vm.current).toBe(2);

      wrapper.find("#arrowSelectorLeft").trigger("keydown", {
        key: "A",
        preventDefault
      });
      expect(wrapper.vm.current).toBe(2);
      expect(preventDefault).toHaveBeenCalledTimes(0);

      wrapper.find("#arrowSelectorLeft").trigger("keydown");
      expect(wrapper.vm.current).toBe(2);

      wrapper.find("#arrowSelectorLeft").trigger("keydown", {
        key: "Enter",
        shiftKey: true,
        preventDefault
      });
      expect(wrapper.vm.current).toBe(2);
      expect(preventDefault).toHaveBeenCalledTimes(0);

      wrapper.find("#arrowSelectorLeft").trigger("keydown", {
        key: "Enter",
        ctrlKey: true,
        preventDefault
      });
      expect(wrapper.vm.current).toBe(2);
      expect(preventDefault).toHaveBeenCalledTimes(0);

      wrapper.find("#arrowSelectorLeft").trigger("keydown", {
        key: "Enter",
        altKey: true,
        preventDefault
      });
      expect(wrapper.vm.current).toBe(2);
      expect(preventDefault).toHaveBeenCalledTimes(0);

      wrapper.find("#arrowSelectorLeft").trigger("keydown", {
        key: "Enter",
        metaKey: true,
        preventDefault
      });
      expect(wrapper.vm.current).toBe(2);
      expect(preventDefault).toHaveBeenCalledTimes(0);
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
