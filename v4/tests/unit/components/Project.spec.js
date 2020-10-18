import Accordion from "@/components/Accordion";
import { mount } from "@vue/test-utils";
import Project from "@/components/Project.vue";

describe("Project", () => {
  describe("rendering", () => {
    it("renders", () => {
      const wrapper = mount(Project, {
        props: {
          name: "Test"
        },
        data() {
          return {
            details: {
              name: "Test",
              github: "Github",
              link: "Link",
              description: "test description",
              technologies: {
                frontend: "",
                backend: ""
              }
            }
          };
        }
      });
      expect(wrapper.element).toMatchSnapshot();
    });

    it("renders with a TBA link", () => {
      const wrapper = mount(Project, {
        props: {
          name: "Test"
        },
        data() {
          return {
            details: {
              name: "Test",
              github: "Github",
              description: "test description",
              technologies: {
                frontend: "",
                backend: ""
              }
            }
          };
        }
      });
      expect(wrapper.element).toMatchSnapshot();
    });

    it("renders with showcase", () => {
      const wrapper = mount(Project, {
        props: {
          name: "showcase"
        },
        data() {
          return {
            details: {
              name: "Showcase",
              github: "Github",
              description: "test description",
              technologies: {
                frontend: "",
                backend: ""
              }
            }
          };
        }
      });
      expect(wrapper.element).toMatchSnapshot();
    });
  });

  describe("behaviour", () => {
    it("expands accordion with features", () => {
      const wrapper = mount(Project, {
        props: {
          name: "Test"
        },
        data() {
          return {
            details: {
              name: "Test",
              github: "Github",
              link: "Link",
              description: "test description",
              technologies: {
                frontend: "",
                backend: ""
              },
              features: ["list", "of", "features"]
            }
          };
        }
      });
      expect(wrapper.element).toMatchSnapshot();
      wrapper.findComponent(Accordion).vm.$emit("change");
      expect(wrapper.vm.expand).toBeTruthy();
    });
  });
});
