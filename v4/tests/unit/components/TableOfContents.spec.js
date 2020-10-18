import { shallowMount, mount } from "@vue/test-utils";
import TableOfContents from "@/components/TableOfContents.vue";

describe("TableOfContents", () => {
  describe("rendering", () => {
    it("renders", () => {
      const wrapper = shallowMount(TableOfContents, {
        props: {
          contents: [
            { label: "Test", link: "test", title: "Fake link", focusId: "test" }
          ]
        }
      });
      expect(wrapper.element).toMatchSnapshot();
    });
  });

  describe("behaviour", () => {
    xit("jumps to proper location", () => {
      document.createElement("div").setAttribute("id", "test");
      const wrapper = mount(TableOfContents, {
        props: {
          contents: [
            { label: "Test", link: "test", title: "Fake link", focusId: "test" }
          ]
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      wrapper.find("#tableOfContents").trigger("keydown", {
        key: 1
      });
    });
  });
});
