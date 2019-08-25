

export class SecurityConfig {
	constructor(public allowAnonymous: boolean = false, 
				public permissions: string[] = []
				) {
	}
}