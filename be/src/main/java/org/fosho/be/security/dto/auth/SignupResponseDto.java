package org.fosho.be.security.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.fosho.be.security.dto.user.UserResponseDto;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class SignupResponseDto {

    private UserResponseDto userResponseDto;
    private TokenDto tokenDto;
}