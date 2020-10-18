import { shallowMount, mount } from "@vue/test-utils";
import Accordion from "@/components/Accordion.vue";

describe("Accordion", () => {
  describe("rendering", () => {
    it("renders", () => {
      const wrapper = shallowMount(Accordion);
      expect(wrapper.element).toMatchSnapshot();
    });

    it("renders expanded", () => {
      const wrapper = mount(Accordion, {
        slots: {
          content: "<div id='test'>Here</div>"
        },
        props: {
          labelExpanded: "Expanded",
          expand: true
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.find("#test").text()).toEqual("Here");
      expect(wrapper.find("#accordionBtn").text()).toEqual("Expanded-");
    });

    it("renders minimized", () => {
      const wrapper = shallowMount(Accordion, {
        slots: {
          content: "<div id='test'>Here</div>"
        },
        props: {
          labelMinimized: "Minimized"
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      expect(wrapper.find("#accordionBtn").text()).toEqual("Minimized+");
    });
  });

  describe("behaviour", () => {
    it("emits change when clicked", () => {
      const wrapper = shallowMount(Accordion);
      expect(wrapper.element).toMatchSnapshot();
      wrapper.find("#accordionBtn").trigger("click");
      expect(wrapper.emitted()).toHaveProperty("change");
    });
  });
});
