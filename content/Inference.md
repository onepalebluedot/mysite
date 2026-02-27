When people talk about [[AI]] inference, they mean the “runtime” phase of a machine-learning system: a trained model takes new input and produces an output. If training is where the model **learns** patterns from data, inference is where the model **uses** those learned patterns to make a prediction or generate something.

**Example:** Inference can happen in lots of contexts: a phone doing on-device speech-to-text, a factory camera flagging defects in real time, or a chatbot generating the next token in a sentence. The key idea is the same: the model’s parameters are already set, and the system is executing a forward pass to produce results.

In practice, inference work is often about tradeoffs. Faster responses usually require smaller models, optimized runtimes, quantization (lower precision math), batching, caching, or specialized hardware (GPUs/TPUs/NPUs). Lower latency and lower cost can pull against output quality, context length, and throughput. This is why “serving” a model at scale becomes its own engineering problem—sometimes as hard as training, just in a different way.
## What matters most during inference
- **Latency:** how quickly you get the first useful output.
- **Throughput:** how many requests (or tokens) you can produce per second.
- **Cost & efficiency:** compute, memory, and power per request.
- **Quality & reliability:** accuracy, stability, and behavior under weird inputs.
- **Privacy & deployment:** on-device vs cloud, and what data leaves the system.
## A simple mental model
**Input → tokenize/encode → model forward pass → decode/output → post-processing**

That’s inference: the moment the model stops learning and starts performing.