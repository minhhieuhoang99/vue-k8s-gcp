import { shallowMount } from "@vue/test-utils";
import Welcome from "@/components/Welcome.vue";
import Resume from "@/components/Resume.vue";
import Paragraph from "@/components/Paragraph.vue";

describe("Welcome.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Welcome, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe("Resume.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Resume, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe("Paragraph.vue", () => {
  test("should show the p element on Paragraph", () => {
    const wrapper = shallowMount(Paragraph);
    expect(wrapper.find("p").exists()).toBe(true);
  });
});
