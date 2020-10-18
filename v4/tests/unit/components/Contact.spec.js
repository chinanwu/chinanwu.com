import FloatInput from "@/components/FloatInput";
import FloatTextArea from "@/components/FloatTextArea";
import { shallowMount } from "@vue/test-utils";
import Contact from "@/components/Contact.vue";

describe("Contact", () => {
  describe("rendering", function() {
    it("renders", () => {
      const wrapper = shallowMount(Contact);
      expect(wrapper.element).toMatchSnapshot();
    });
  });

  describe("behaviour", () => {
    it("sets input values", () => {
      const wrapper = shallowMount(Contact);
      expect(wrapper.element).toMatchSnapshot();
      const nameValue = "test";
      const subjectValue = "subject";
      const floatInputs = wrapper.findAllComponents(FloatInput);
      floatInputs[0].vm.$emit("change", nameValue);
      floatInputs[1].vm.$emit("change", subjectValue);
      expect(wrapper.vm.nameValue).toEqual(nameValue);
      expect(wrapper.vm.subjectValue).toEqual(subjectValue);
      const bodyValue = "body";
      wrapper.findComponent(FloatTextArea).vm.$emit("change", bodyValue);
      expect(wrapper.vm.bodyValue).toEqual(bodyValue);
    });

    xit("submits", () => {
      const wrapper = shallowMount(Contact);
      expect(wrapper.element).toMatchSnapshot();
      wrapper.find("#contactSubmit").trigger("submit");
    });
  });
});
