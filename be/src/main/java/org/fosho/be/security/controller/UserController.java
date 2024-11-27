package org.fosho.be.security.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.fosho.be.security.dto.auth.SignupResponseDto;
import org.fosho.be.security.dto.user.UserSignupRequestDto;
import org.fosho.be.security.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.nio.file.attribute.UserPrincipal;

@RestController
@RequiredArgsConstructor
@Slf4j
public class UserController {

    private final AuthService authService;

    @PostMapping("/api/signup")
    public ResponseEntity<?> signup(@RequestBody UserSignupRequestDto request) {
        // 추가 정보 저장 로직 구현
        SignupResponseDto signup = authService.signup(request);
        log.info("signup = {}", signup.getUserResponseDto().getEmail());
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
