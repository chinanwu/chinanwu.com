import { shallowMount } from "@vue/test-utils";
import Separator from "@/components/Separator.vue";

describe("Separator", () => {
  it("renders", () => {
    const wrapper = shallowMount(Separator);
    expect(wrapper.element).toMatchSnapshot();
  });
});
