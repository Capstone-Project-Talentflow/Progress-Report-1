
### Requirements

```
pip install pytessract, llama_cpp, pdf2image
```

Manual install of tesseract is also needed.

## A series of approaches to parsing business artifacts (Resume, Curriculum Vitae, or Bio Data) into json format, to be used dynamically in programs. 

The specified JSON format looks as such:

resume_data = {
        'resume_id': resume_id,
        'created_at': datetime.now().isoformat(),
        'personal_info': {
            'first_name': '',
            'last_name': '',
            'email': '',
            'phone': '',
            'address': '',
            'city': '',
            'country': ''
        },
        'experiences': [],
        'education': [],
        'skills': {
            'technical': '',
            'soft': '',
            'interests': ''
        }
    }

However, for this parsing, "resume_id" and "created_at" fields are omitted, left for the website to add in the database during user registration.

**Multiple approaches were undertaken:**

**First,** a VLM (Qwen3 2b VL Instruct) was used for both OCR and structuring the data according to context. Although the results are satisfactory, the runtime is very slow (~40 minutes for a 3 page resume), this is despite the low set quality of pictures (150 dpi set for the conversion of pdf to image, which is very much below the standard of 400 or even 300 dpi).

**Second,** a hybrid approach was used: Tesseract for OCR, and a small large language model (Qwen3 1.7b Instruct). This also generated satisfactory results, but with long latency (~10 minutes for a 3-page resume). This is leagues better than the previous option, but is still not fast enough for Theits purpose.

**Third,** since the bottleneck seems to be the application of the LLM, we used the quantized GGUF version of Qwen 1.7B Instruct. Using this, we are able to run parsing for 3-page resumes for only 5 minutes maximum.

The next step would be to attempt using granite-docling-256m-VLM by IBM and Docling. This was previously attempted but kept resulting in errors

Another step to take, if the above is still lacking, is to fine tune the quantized Qwen3 1.7b Instruct model for resume parsing purposes.                                                                                                                                                                                
