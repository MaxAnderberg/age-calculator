import { shallowMount } from '@vue/test-utils'
import AgeCalculator from '@/components/HelloWorld.vue'

describe('AgeCalculator.vue', () => {

  it('should call a method when a button is clicked', async () => {
    const wrapper = shallowMount(AgeCalculator);
    
    // Spy on a method
    const spyMethod = jest.spyOn(wrapper.vm, 'validateYear');
    
    await wrapper.find('#year-input').setValue('1990'); // Replace 'year-input' with your actual input field ID or selector
    
    // Check if the method was called
    expect(spyMethod).toHaveBeenCalled();
  });
})
