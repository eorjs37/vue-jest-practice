import { shallowMount } from "@vue/test-utils";
import HelloWorld from '@/components/HelloWorld.vue'
describe('hello world', () => {
    test('test1', async () => {
        const wrapper = shallowMount(HelloWorld);
        expect(wrapper.text()).toBe("hello")
    });

    test('test created', () => {
        const createdSpy = jest.spyOn(HelloWorld, "created");
        const wrapper = shallowMount(HelloWorld);
        expect(createdSpy).toHaveBeenCalled();
    });
});