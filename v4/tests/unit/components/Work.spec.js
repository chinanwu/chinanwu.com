import { shallowMount } from "@vue/test-utils";
import Work from "@/components/Work.vue";

describe("Work", () => {
  describe("rendering", () => {
    it("renders", () => {
      const wrapper = shallowMount(Work);
      expect(wrapper.element).toMatchSnapshot();
    });
  });

  xdescribe("behaviour", () => {
    it("downloads resumes on click", () => {
      const wrapper = shallowMount(Work);
      expect(wrapper.element).toMatchSnapshot();
      wrapper.find("#workDownload").trigger("click");
    });
  });
});
