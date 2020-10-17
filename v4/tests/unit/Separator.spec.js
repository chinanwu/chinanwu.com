import { shallowMount } from "@vue/test-utils";
import Separator from "@/components/Separator.vue";

describe("Separator.vue", () => {
  it("renders", () => {
    const wrapper = shallowMount(Separator);
    expect(wrapper.element).toMatchSnapshot();
  });
});
