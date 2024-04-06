# WifeAlert

![App Demo](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjV1OTNqbWUwa3FscjhpZXZyM2lzMG1lbTVrNzdyY2Vrc3lhcmpqeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ubDnHMS44Eql8xae5t/giphy.gif)

Ever been in the zone, deeply focused on your work or studies, only to be constantly interrupted by a flood of messages? It's frustrating, right? That's why I created WifeAlert, an app that solves this problem. With WifeAlert, my fiancée can easily grab my attention when it's truly important, like when she needs my help or has something urgent to discuss.

WifeAlert lets her control the smart lights near my desk. With a single press of a button, she can invoke a simple toggle or strobe pattern on the lights, notifying me without disrupting my flow. It's the perfect balance between staying focused and being available when needed. Now, I no longer need to feel bad about ignoring my phone knowing she can get my attention.

## Technology Used
- React Native
- Typescript
- Ngrok

## Challenges

The documentation and setup for using the Philips Hue Developer Program had a small learning curve. Thankfully, the documentation was thorough and easy to follow.

The biggest challenge I ran into came when I tried to make PUT calls to the API for my light bulb. Simulators seem to work on their own network, and as a security feature, my light won't accept API calls from devices that aren't on the same wifi network. To get around this, I used Ngrok to create a secure tunnel from the simulator to my network.

### Future Iterations

- Since time was limited, virtually no thought for styling went into this. Simple UI improvements would be first on the list.
- Currently, it's only set up to toggle the 1 light by my desk. Future implementations could include the ability to select which light bulbs the user would like to trigger.

#### Acknowledgments

This was submitted as part of a 5 hour hackathon during my time at [Turing School of Software and Design](https://turing.edu/).
