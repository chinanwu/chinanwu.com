import { shallowMount, mount } from "@vue/test-utils";
import Brackets from "@/components/Brackets.vue";

describe("Brackets", () => {
  it("renders", () => {
    const wrapper = shallowMount(Brackets);
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders with content", () => {
    const wrapper = mount(Brackets, {
      slots: {
        content: "<div id='test'>Here</div>"
      }
    });
    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.find("#test").text()).toEqual("Here");
  });
});
