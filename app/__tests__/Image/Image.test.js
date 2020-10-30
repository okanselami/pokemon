import React from 'react';
import Image from '../../components/Image';
import "../../setupTests"
import { shallow } from 'enzyme'

describe("Image components", () => {
    it("renders an image with src correctly", () => {
        const wrapper = shallow(<Image name="pikachu" />);
        expect(wrapper.find("img").prop("src")).toEqual("https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif");
    });
});