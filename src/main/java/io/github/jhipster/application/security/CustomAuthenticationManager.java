/**
 * 
 */
package io.github.jhipster.application.security;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ldap.core.DirContextAdapter;
import org.springframework.ldap.core.DirContextOperations;
import org.springframework.ldap.core.support.LdapContextSource;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.ldap.authentication.BindAuthenticator;
import org.springframework.security.ldap.authentication.LdapAuthenticationProvider;
import org.springframework.security.ldap.search.FilterBasedLdapUserSearch;
import org.springframework.security.ldap.userdetails.UserDetailsContextMapper;
import org.springframework.stereotype.Component;

import io.github.jhipster.application.domain.Authority;
import io.github.jhipster.application.domain.User;
import io.github.jhipster.application.repository.UserRepository;


/**
 * @author chorrell
 *
 */
@Component
public class CustomAuthenticationManager implements AuthenticationManager {

	LdapAuthenticationProvider provider = null;

    private static final Logger log = LoggerFactory.getLogger(CustomAuthenticationManager.class);

    private final UserRepository userRepository;

    @Autowired
    private final LdapContextSource ldapContextSource;

    public CustomAuthenticationManager(UserRepository userRepository, LdapContextSource ldapContextSource) {
        this.userRepository = userRepository;
        this.ldapContextSource = ldapContextSource;
    }

    @Override
    public Authentication authenticate(Authentication authentication) {
        log.error("AUTHENTICATION Login " + authentication.getName());
        log.error("AUTHENTICATION Password " + authentication.getCredentials().toString());

        BindAuthenticator bindAuth = new BindAuthenticator(ldapContextSource);
        FilterBasedLdapUserSearch userSearch = new FilterBasedLdapUserSearch(
                "", "(uid={0})",
                ldapContextSource);
        try{
            bindAuth.setUserSearch(userSearch);
            bindAuth.afterPropertiesSet();
        } catch (Exception ex) {
            log.error("crashed out in Custom Authenticator");
        	java.util.logging.Logger.getLogger(CustomAuthenticationManager.class.getName()).log(null, ex.toString());
        }
        provider = new LdapAuthenticationProvider(bindAuth);
        log.error("added provider "+ provider.toString());
        provider.setUserDetailsContextMapper(new UserDetailsContextMapper() {
            @Override
            public UserDetails mapUserFromContext(DirContextOperations ctx, String username, Collection<? extends GrantedAuthority> clctn) {
                Optional<User> isUser = userRepository.findOneWithAuthoritiesByLogin(username);
                log.error("Optional user logging: "+isUser.toString());
                
                final User user = isUser.get();
                Set<Authority> userAuthorities = user.getAuthorities();
                log.error("user "+user.toString()+" has authorities: "+userAuthorities.toString());
                
                //Add user authority for LDAP users
                Authority userAuthority = new Authority();
                userAuthority.setName(AuthoritiesConstants.USER);
                userAuthorities.add(userAuthority);
                
                
                Collection<GrantedAuthority> grantedAuthorities = new ArrayList<>();
                for(Authority a: userAuthorities){
                	GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(
                            a.getName());
                grantedAuthorities.add(grantedAuthority);
                GrantedAuthority grantedAuthority2 = new SimpleGrantedAuthority(
                        "ROLE_ADMIN");
                grantedAuthorities.add(grantedAuthority2);

                log.error("added authority "+grantedAuthority.getAuthority());
                }
                  return new org.springframework.security.core.userdetails.User(
                    username, "1" , grantedAuthorities);    
            }

            @Override
            public void mapUserToContext(UserDetails ud, DirContextAdapter dca) {

            }
        });
        return provider.authenticate(authentication);
}
    }
