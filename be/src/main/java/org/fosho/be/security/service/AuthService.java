package org.fosho.be.security.service;


import org.fosho.be.security.dto.auth.SignupResponseDto;
import org.fosho.be.security.dto.user.UserSignupRequestDto;

public interface AuthService {
    SignupResponseDto signup(UserSignupRequestDto userSignupRequestDto);
}
