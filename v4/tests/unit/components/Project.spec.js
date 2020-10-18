import { shallowMount } from "@vue/test-utils";
import Project from "@/components/Project.vue";

describe("Project", () => {
  describe("rendering", () => {
    it("renders", () => {
      const wrapper = shallowMount(Project, {
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
      const wrapper = shallowMount(Project, {
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
      const wrapper = shallowMount(Project, {
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
});
