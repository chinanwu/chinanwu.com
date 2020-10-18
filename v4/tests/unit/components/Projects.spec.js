import { shallowMount } from "@vue/test-utils";
import Projects from "@/components/Projects.vue";

describe("Projects", () => {
  it("renders", () => {
    const wrapper = shallowMount(Projects);
    expect(wrapper.element).toMatchSnapshot();
  });
});
