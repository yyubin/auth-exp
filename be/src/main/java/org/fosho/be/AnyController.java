package org.fosho.be;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AnyController {

    @GetMapping("/any")
    public String any() {
        return "any";
    }

}
